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
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
            id="upload-file"
          />
          <label htmlFor="upload-file">
            <Button variant="contained" component="span" color="secondary">
              Upload PDF
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
      {extractedData && <HealthInsuranceSlides data={extractedData} />}
    </>
  );
}
