"use client";
import React, { useEffect, useState } from "react";
import {
  FileText,
  AlertCircle,
  CheckCircle,
  FileCheck,
  Calendar,
  User,
  DollarSign,
  Clipboard,
  Download,
  Printer,
} from "lucide-react";
import ClaimTable from "./ClaimTable";

const HealthInsuranceSlides = (data) => {
  const [claimdata, setClaimdata] = useState(null);
  const [policyData, setPolicydata] = useState(null);
  useEffect(() => {
    console.log("new data", data);
    console.log(" policy data", data.policyData);
    setPolicydata(data.policyData);
    setClaimdata(data.data);
  }, [data]);

  return (
    claimdata && (
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Health Insurance Claims Processing System
          </h1>
          {/* <div className="flex items-center space-x-2">
          <span className="text-gray-500">FHPL × Searce</span>
          <span className="text-blue-500 font-medium">Feb 2025</span>
        </div> */}
        </div>

        {/* Slide 1 - Classification */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <div className="h-8 w-2 bg-blue-500 rounded-l"></div>
            <div className="h-8 w-2 bg-green-500"></div>
            <div className="h-8 w-2 bg-yellow-500"></div>
            <div className="h-8 w-2 bg-red-500 rounded-r"></div>
            <h2 className="text-2xl font-bold ml-4">
              Step 1 - Document Classification
            </h2>
            {/* <div className="ml-auto flex space-x-2">
              <button className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                <FileCheck size={16} className="mr-1" /> Validate
              </button>
            </div> */}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Patient Portfolio</h3>
                {/* <p className="text-gray-600">
                ID: PAT-2025-02-7846 | Date Added: 15 Feb 2025
              </p> */}
              </div>
              {/* <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm flex items-center">
                  <Download size={14} className="mr-1" /> Download All
                </button>
                <button className="bg-gray-600 text-white px-3 py-2 rounded text-sm flex items-center">
                  <Printer size={14} className="mr-1" /> Print
                </button>
              </div> */}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
                  <h4 className="font-medium">Aadhar Card</h4>
                  <span className="bg-green-400 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>
                <div className="p-4">
                  <div className="bg-gray-100 p-4 rounded border border-dashed border-gray-300 flex items-center justify-center mb-3">
                    <div className="text-center">
                      <FileText
                        size={36}
                        className="mx-auto text-blue-400 mb-2"
                      />
                      <p className="text-sm text-gray-600">
                        {claimdata["Patinet Aadhar No"]}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Name:</span>
                      <span>{claimdata["Patient Name (from Addhar)"]}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">DOB:</span>
                      <span>{claimdata["Patient Dob (from Addhar)"]}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span
                        className="text-gray-600"
                        style={{ marginRight: 10 }}
                      >
                        Address:
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {claimdata["Patient Address 1"]}{" "}
                        {claimdata["Patient Address 2"]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
                  <h4 className="font-medium">PAN Card</h4>
                  <span className="bg-green-400 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>
                <div className="p-4">
                  <div className="bg-gray-100 p-4 rounded border border-dashed border-gray-300 flex items-center justify-center mb-3">
                    <div className="text-center">
                      <FileText
                        size={36}
                        className="mx-auto text-indigo-400 mb-2"
                      />
                      <p className="text-sm text-gray-600">
                        {claimdata["Patient PAN No"]}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Name:</span>
                      <span>{claimdata["Patient Name (from PAN)"]}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Father's Name:</span>
                      <span>{claimdata["Father Name (from PAN)"]}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Issue Date:</span>
                      <span>{claimdata["Issue Date (from PAN)"]}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                <div className="bg-red-500 text-white p-3 flex justify-between items-center">
                  <h4 className="font-medium">Hospital Details</h4>
                  <span className="bg-yellow-400 text-xs px-2 py-1 rounded-full">
                    Review
                  </span>
                </div>
                <div className="p-4">
                  <div className="bg-gray-100 p-4 rounded border border-dashed border-gray-300 flex items-center justify-center mb-3">
                    <div className="text-center">
                      <User size={36} className="mx-auto text-red-400 mb-2" />
                      <p className="text-sm text-gray-600">Hospital Details</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Name:</span>
                      <span>{claimdata["HospitalName"]}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Address:</span>
                      <span>{claimdata["HospitalAddress"]}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Phone No:</span>
                      <span>{claimdata["HospitalPhoneNumber"]}</span>
                    </div>
                    <div
                      className="flex justify-between py-1"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      <span
                        className="text-gray-600"
                        style={{ marginRight: 10 }}
                      >
                        Email Id:
                      </span>
                      <span style={{ textWrap: "wrap" }}>
                        {claimdata["HospitalEmailID"]}
                      </span>
                    </div>
                    <div
                      className="flex justify-between py-1"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      <span
                        className="text-gray-600"
                        style={{ marginRight: 10 }}
                      >
                        Website:
                      </span>
                      <span style={{ textWrap: "wrap" }}>
                        {claimdata["HospitalWebsite"]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 - AI Extraction */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <div className="h-8 w-2 bg-blue-500 rounded-l"></div>
            <div className="h-8 w-2 bg-green-500"></div>
            <div className="h-8 w-2 bg-yellow-500"></div>
            <div className="h-8 w-2 bg-red-500 rounded-r"></div>
            <h2 className="text-2xl font-bold ml-4">Step 2 - AI Extraction</h2>
            <div className="ml-auto flex space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                AI Processing Complete
              </span>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                <div className="bg-pink-500 text-white p-3">
                  <h3 className="font-semibold">Billing Summary</h3>
                  <p className="text-xs opacity-75">
                    Automatically extracted from hospital invoice
                  </p>
                </div>
                <div className="p-4">
                  <div className="mb-4 pb-4 border-b border-dashed border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Hospital:</span>
                      <span className="font-medium">
                        {claimdata["HospitalName"]}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">
                        Provisional/Final Diagnosis:
                      </span>
                      <span className="font-medium">
                        {claimdata["Provisional/Final Diagnosis"]}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Date of Admission:</span>
                      <span className="font-medium">
                        {claimdata["DateOfAdmission"]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date of Discharge:</span>
                      <span className="font-medium">
                        {claimdata["DateOfDischarge"]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Treating Doctor Name::
                      </span>
                      <span className="font-medium">
                        {claimdata["TreatingDoctorName"]}
                      </span>
                    </div>
                  </div>

                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-2 text-left">Category</th>
                        <th className="p-2 text-right">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">
                          Per day room rent + nursing and service charges+
                          patients diet
                        </td>
                        <td className="p-2 text-right">
                          {
                            claimdata[
                              "Per day room rent + nursing and service charges+ patients diet"
                            ]
                          }
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">
                          Expected cost of investigation + diagnostic
                        </td>
                        <td className="p-2 text-right">
                          {
                            claimdata[
                              "Expected cost of investigation + diagnostic"
                            ]
                          }
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">ICU charges</td>
                        <td className="p-2 text-right">
                          {claimdata["ICU charges"]}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">OT charges</td>
                        <td className="p-2 text-right">
                          {claimdata["OT charges"]}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">
                          Professional fes Surgeon + Anesthetist Fees +
                          consultation Charges
                        </td>
                        <td className="p-2 text-right">
                          {
                            claimdata[
                              "Professional fes Surgeon + Anesthetist Fees + consultation Charges"
                            ]
                          }
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">
                          Medicines + Consumables + Cost of Implants (if
                          applicable please specify)
                        </td>
                        <td className="p-2 text-right">
                          {
                            claimdata[
                              "Medicines + Consumables + Cost of Implants (if applicable please specify)"
                            ]
                          }
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">Other hospital expenses if any</td>
                        <td className="p-2 text-right">
                          {claimdata["Other hospital expenses if any"]}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">
                          All-inclusive package charges if any applicable
                        </td>
                        <td className="p-2 text-right">
                          {
                            claimdata[
                              "All-inclusive package charges if any applicable"
                            ]
                          }
                        </td>
                      </tr>{" "}
                      <tr className="font-medium bg-gray-50">
                        <td className="p-2">
                          Sum Total expected cost of hospitalization
                        </td>
                        <td className="p-2 text-right">
                          {
                            claimdata[
                              "Sum Total expected cost of hospitalization"
                            ]
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                <div className="bg-green-600 text-white p-3">
                  <h3 className="font-semibold">Policy Coverage Analysis</h3>
                  <p className="text-xs opacity-75">
                    Based on policy clauses & approved TnC
                  </p>
                </div>
                <div className="p-4">
                  <div className="mb-4 pb-4 border-b border-dashed border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Policy Number:</span>
                      <span className="font-medium">
                        {policyData.policyInformation["policyNumber"]}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Policy Type:</span>
                      <span className="font-medium">
                        {policyData.policyInformation["policyType"]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage Limit:</span>
                      <span className="font-medium">
                        {policyData.policyInformation["coverageLimit"]}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Policy Clauses:</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <AlertCircle
                          size={16}
                          className="text-red-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span>
                          Room Rent Cap:{" "}
                          {
                            policyData.policyInformation.keyPolicyClauses[
                              "Room Rent Cap"
                            ]
                          }
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle
                          size={16}
                          className="text-red-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span>
                          Diet & Supplements:{" "}
                          {
                            policyData.policyInformation.keyPolicyClauses[
                              "Diet & Supplements"
                            ]
                          }
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span>
                          Diagnostics:{" "}
                          {
                            policyData.policyInformation.keyPolicyClauses[
                              "Diagnostics"
                            ]
                          }
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span>
                          Medications & Consumables:{" "}
                          {
                            policyData.policyInformation.keyPolicyClauses[
                              "Medications & Consumables"
                            ]
                          }
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-1">
                      Coverage Assessment
                    </h4>
                    <p className="text-sm text-blue-700">
                      Based on policy terms, maximum claimable amount:{" "}
                      <span className="font-bold">
                        &lt;{" "}
                        {policyData.policyInformation["maximumClaimableAmount"]}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 - Anomalies */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <div className="h-8 w-2 bg-blue-500 rounded-l"></div>
            <div className="h-8 w-2 bg-green-500"></div>
            <div className="h-8 w-2 bg-yellow-500"></div>
            <div className="h-8 w-2 bg-red-500 rounded-r"></div>
            <h2 className="text-2xl font-bold ml-4">
              Step 3 - Anomalies (not covered)
            </h2>
            <div className="ml-auto">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm flex items-center">
                <AlertCircle size={14} className="mr-1" />
                Coverage Issues Detected
              </span>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden max-w-3xl mx-auto">
              <div className="bg-purple-500 text-white p-3 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Tariff Charges Summary</h3>
                  <p className="text-xs opacity-75">
                    Items excluded from coverage based on policy terms
                  </p>
                </div>
                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full">
                  Non-Claimable
                </span>
              </div>

              <ClaimTable claimData={policyData.claimInfo} />
            </div>
          </div>
        </div>

        {/* Slide 4 - Summary */}
        <div className="mb-4 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <div className="h-8 w-2 bg-blue-500 rounded-l"></div>
            <div className="h-8 w-2 bg-green-500"></div>
            <div className="h-8 w-2 bg-yellow-500"></div>
            <div className="h-8 w-2 bg-red-500 rounded-r"></div>
            <h2 className="text-2xl font-bold ml-4">
              Step 4 - Summary and Reasoning
            </h2>
            <div className="ml-auto">
              {/* <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center">
                <Printer size={14} className="mr-1" /> Print Report
              </button> */}
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden max-w-4xl mx-auto">
              <div className="bg-blue-600 text-white p-3">
                <h3 className="font-semibold">Claim Assessment Report</h3>
                {/* <p className="text-xs opacity-75">
                  Claim #CL-20250217-85462 | Generated on 17 Feb 2025, 10:42 AM
                </p> */}
              </div>

              <div className="p-5">
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">
                      Patient Information
                    </h4>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div>
                          <span className="text-gray-500 block">Name</span>
                          <span className="font-medium">
                            {claimdata["Patient Name (from Addhar)"]}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">
                            Policy Number
                          </span>
                          <span className="font-medium">
                            {policyData.policyInformation.policyNumber}
                          </span>
                        </div>
                        <div>
                          {/* <span className="text-gray-500 block">Member ID</span>
                          <span className="font-medium">MEM-82746</span> */}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-gray-500 block">Hospital</span>
                          <span className="font-medium">
                            {claimdata["HospitalName"]}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">
                            Admission Period
                          </span>
                          <span className="font-medium">
                            {claimdata["DateOfAdmission"]} -{" "}
                            {claimdata["DateOfDischarge"]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">
                      Claim Summary
                    </h4>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <div className="flex justify-between mb-2 pb-2 border-b border-gray-200">
                        <span className="text-gray-600">
                          Total Billed Amount:
                        </span>
                        <span className="font-medium">
                          {
                            claimdata[
                              "Sum Total expected cost of hospitalization"
                            ]
                          }
                        </span>
                      </div>
                      <div className="flex justify-between mb-2 pb-2 border-b border-gray-200">
                        <span className="text-gray-600">
                          Non-Claimable Amount:
                        </span>
                        <span className="font-medium text-red-600">
                          {policyData.claimInfo.totalDisallowedAmount}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2 pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Claimable Amount:</span>
                        <span className="font-medium text-green-600">
                          {policyData.claimInfo.totalPayableAmount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-800 font-medium">
                          Final Decision:
                        </span>
                        <span className="font-bold text-blue-700">
                          Partial Approval
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {policyData.claimInfo.disallowedReasons && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">
                      Detailed Reasoning
                    </h4>
                    <div className="bg-blue-50 p-4 rounded border border-blue-100 text-blue-800">
                      <h5 className="font-medium mb-2">
                        Why the claim was rejected:
                      </h5>
                      <ul className="text-sm space-y-3">
                        {policyData.claimInfo.disallowedReasons.map(
                          (item, index) => (
                            <li key={index} className="flex items-start">
                              <AlertCircle
                                size={16}
                                className="text-red-500 mr-2 mt-1 flex-shrink-0"
                              />
                              <div>
                                <p className="font-medium mb-1">
                                  {item.category}
                                </p>
                                <p className="text-blue-700">{item.reason}</p>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span className="font-medium">
                      Approved Amount: {policyData.claimInfo.totalPayableAmount}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Processed by</span>
                    <span className="ml-1 font-medium">
                      AI Claims Assistant + Human Review
                    </span>
                  </div>
                  <div>
                    {/* <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                      View Complete Policy
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HealthInsuranceSlides;
