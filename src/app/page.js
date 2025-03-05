"use client";
import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Grid,
  Divider,
  Paper,
  Box,
} from "@mui/material";
import axios from "axios";
import HealthInsuranceSlides from "./Display";
import FHPLlogo from "./image.png";
import Searcelogo from "./logo-black.svg";
import Image from "next/image";
export default function PDFExtractor() {
  const [file, setFile] = useState(null);
  const [policyFile, setPolicyFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [extractedPolicyData, setExtractedPolicyData] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePolicyFileChange = (event) => {
    setPolicyFile(event.target.files[0]);
  };
  const fieldsToExtract = [
    "Patient Address 1",
    "Time Of Discharge",
    "Patient Address 2",
    "Claimed Amount",
    "Patient Mobile",
    "Accomodation Type",
    "Patient Bank Account No",
    "ICU Days",
    "Patient Bank Name",
    "Patiend Paid Amount",
    "Patient Bank Branch Name",
    "Bill NO",
    "Patient Bank Account Type",
    "Covid",
    "Patient Bank IFSC Code",
    "Patient Condition",
    "Patient EmailID",
    "Provisional/Final Diagnosis",
    "Patient PAN No",
    "Patient Name (from PAN)",
    "Patient Dob (from PAN)",
    "Father Name (from PAN)",
    "Issue Date (from PAN)",
    "Per day room rent + nursing and service charges+ patients diet",
    "Expected cost of investigation + diagnostic",
    "ICU charges",
    "OT charges",
    "Professional fes Surgeon + Anesthetist Fees + consultation Charges",
    "Medicines + Consumables + Cost of Implants (if applicable please specify)",
    "Other hospital expenses if any",
    "All-inclusive package charges if any applicable",
    "Sum Total expected cost of hospitalization",
    "Accident Case",
    "Patinet Aadhar No",
    "Patient Name (from Addhar)",
    "Patient Dob (from Addhar)",
    "Death Case",
    "TreatingDoctorName",
    "Date of Death",
    "TreatingDoctorRegistrationNumber",
    "TimeOfDeath",
    "Claim Registered Mobile No",
    "Maternity",
    "Claim Registered Email ID",
    "Date of Delivery",
    "Claim Type",
    "HospitalName",
    "Received Date",
    "HospitalAddress",
    "Service Sub Type",
    "HospitalCity",
    "Hospitalization Type",
    "HospitalPhoneNumber",
    "Request Type",
    "HospitalGst",
    "DateOfAdmission",
    "HospitalEmailID",
    "TimeOfAdmission",
    "HospitalRegistrationNumber",
    "DateOfDischarge",
    "HospitalWebsite",
    "HospitalPAN",
    "HospitalPincode",
  ];

  const prompt = `
    Extract the following fields from the provided medical document images.
    Return ONLY a valid JSON object with the field names as keys and extracted values as values.
    If a field cannot be found, set its value to an empty string.
    DO NOT ADD TICKS AND json in front and end, i want to JSON.parse directly from the output
    Fields to extract:
    ${fieldsToExtract.join(", ")}

    Response format example:
    {
      "Patient Address 1": "extracted value",
      "Time Of Discharge": "extracted value",
      ...
    }
  `;
  const sampleResponse = {
    policyInformation: {
      policyNumber: "fetch form the file",
      policyType: "fetch form the file",
      coverageLimit: 100000,
      keyPolicyClauses: {
        "Room Rent Cap": "fetch form the file",
        "Diet & Supplements": "fetch form the file",
        "Medications & Consumables": "fetch form the file",
        Diagnostics: "fetch form the file",
      },
      maximumClaimableAmount: 100000,
    },
    claimInfo: {
      totalClaimedAmount: 54000,
      totalDisallowedAmount: "<amount>",
      totalPayableAmount: "<amount>",
      claimBreakdown: [
        {
          category:
            "Per day room rent + nursing and service charges + patients diet",
          claimed: 2000,
          disallowed: "<if any>",
          payable: "<if any>",
        },
        {
          category: "Expected cost of investigation + diagnostic",
          claimed: 5000,
          disallowed: "<if any>",
          payable: "<if any>",
        },
        {
          category: "Medicines + Consumables + Cost of Implants",
          claimed: 40000,
          disallowed: "<if any>",
          payable: "<if any>",
        },
      ],
      disallowedReasons: [
        {
          category: "<category name>",
          reason: "<Policy clause violated>",
        },
      ],
    },
  };
  const prompt2 = `I have a health insurance policy document along with a set of claim details submitted by a patient. 
    Please verify whether the claims comply with the policy coverage and identify any discrepancies 
    where certain claimed amounts should be disallowed.
    Analyze the claim details against the policy terms and return the final assessment in the following JSON format:
    ${JSON.stringify(sampleResponse)}
      If any amount needs to be disallowed, provide clear reasoning based on policy clauses. 
      Return only the final JSON output.
    `;
  const extractData = async () => {
    if (!file) return alert("Please upload a PDF file first.");
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64File = reader.result.split(",")[1];

      const apiKey = "AIzaSyC3VH2C5PbqQwT81QSznSUxjmQzQZPlqZc";
      // const prompt =
      //   "Extract the following fields from the medical document: Patient Address 1, Time Of Discharge, Claimed Amount, etc.";

      try {
        const response = await axios.post(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
            apiKey,
          {
            contents: [
              {
                parts: [
                  { text: prompt },
                  {
                    inlineData: {
                      mimeType: "application/pdf",
                      data: base64File,
                    },
                  },
                ],
              },
            ],
          }
        );

        const result = response.data.candidates[0]?.content?.parts[0]?.text;
        console.log(result);
        const cleanedText = result.replace(/```json|```/g, "").trim();

        console.log(cleanedText);

        setExtractedData(JSON.parse(cleanedText));
      } catch (error) {
        console.error("Error extracting data:", error);
        alert("Failed to extract data. Check console for details.");
      }
    };
    const reader2 = new FileReader();
    reader2.readAsDataURL(policyFile);
    reader2.onload = async () => {
      const base64File = reader2.result.split(",")[1];

      const apiKey = "AIzaSyC3VH2C5PbqQwT81QSznSUxjmQzQZPlqZc";
      // const prompt =
      //   "Extract the following fields from the medical document: Patient Address 1, Time Of Discharge, Claimed Amount, etc.";

      try {
        const response = await axios.post(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
            apiKey,
          {
            contents: [
              {
                parts: [
                  { text: prompt2 },
                  {
                    inlineData: {
                      mimeType: "application/pdf",
                      data: base64File,
                    },
                  },
                ],
              },
            ],
          }
        );

        const result = response.data.candidates[0]?.content?.parts[0]?.text;
        console.log("policy", result);
        const cleanedText = result.replace(/```json|```/g, "").trim();

        console.log(cleanedText);

        setExtractedPolicyData(JSON.parse(cleanedText));
      } catch (error) {
        console.error("Error extracting data:", error);
        alert("Failed to extract data. Check console for details.");
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{
          padding: 30,
          maxWidth: 500,
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Image
            height={100}
            style={{ marginRight: "10px" }}
            width={200}
            src={FHPLlogo}
            alt=""
          />
          <Typography variant="h4">X</Typography>
          <Image
            height={100}
            style={{ marginLeft: "20px" }}
            width={400}
            src={Searcelogo}
            alt=""
          />
        </Box>
        <Typography marginTop={2} variant="h4" color="black" gutterBottom>
          Health Insurance Claims Processing System
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="upload-file1"
          />
          <label htmlFor="upload-file1">
            <Button variant="contained" component="span" color="secondary">
              Upload Discharge summary and documents PDF
            </Button>
          </label>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          mt={3}
        >
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePolicyFileChange}
            style={{ display: "none" }}
            id="upload-file2"
          />
          <label htmlFor="upload-file2">
            <Button variant="contained" component="span" color="secondary">
              Upload policy documents PDF
            </Button>
          </label>
        </Box>
        <Divider style={{ margin: "20px 0" }} />

        <Button
          variant="contained"
          color="primary"
          onClick={extractData}
          disabled={loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : "Extract Data"}
        </Button>
      </Paper>
      {extractedPolicyData && <HealthInsuranceSlides data={extractedData} policyData={extractedPolicyData} />}
    </>
  );
}
