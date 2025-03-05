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

const HealthInsuranceSlides = (data) => {
  const [claimdata, setClaimdata] = useState(null);
  useEffect(() => {
    console.log("new data", data);
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
            <div className="ml-auto flex space-x-2">
              <button className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                <FileCheck size={16} className="mr-1" /> Validate
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Patient Portfolio</h3>
                {/* <p className="text-gray-600">
                ID: PAT-2025-02-7846 | Date Added: 15 Feb 2025
              </p> */}
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm flex items-center">
                  <Download size={14} className="mr-1" /> Download All
                </button>
                <button className="bg-gray-600 text-white px-3 py-2 rounded text-sm flex items-center">
                  <Printer size={14} className="mr-1" /> Print
                </button>
              </div>
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
                      <span className="text-gray-600">Treating Doctor Name::</span>
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
                        <td className="p-2">Expected cost of investigation + diagnostic</td>
                        <td className="p-2 text-right">{claimdata['Expected cost of investigation + diagnostic']}</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">ICU charges</td>
                        <td className="p-2 text-right">{claimdata['ICU charges']}</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">OT charges</td>
                        <td className="p-2 text-right">{claimdata['OT charges']}</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">Professional fes Surgeon + Anesthetist Fees + consultation Charges</td>
                        <td className="p-2 text-right">{claimdata['Professional fes Surgeon + Anesthetist Fees + consultation Charges']}</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">Medicines + Consumables + Cost of Implants (if applicable please specify)</td>
                        <td className="p-2 text-right">{claimdata['Medicines + Consumables + Cost of Implants (if applicable please specify)']}</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-2">Other hospital expenses if any</td>
                        <td className="p-2 text-right">{claimdata['Other hospital expenses if any']}</td>
                      </tr>

                      <tr className="border-b border-gray-100">
                        <td className="p-2">All-inclusive package charges if any applicable</td>
                        <td className="p-2 text-right">{claimdata['All-inclusive package charges if any applicable']}</td>
                      </tr>                      <tr className="font-medium bg-gray-50">
                        <td className="p-2">Sum Total expected cost of hospitalization</td>
                        <td className="p-2 text-right">{claimdata['Sum Total expected cost of hospitalization']}</td>
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
                      <span className="font-medium">FHPL-HI-45872</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Policy Type:</span>
                      <span className="font-medium">Basic Health Coverage</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage Limit:</span>
                      <span className="font-medium">₹2,00,000 per annum</span>
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
                          Clause 4.2: Room rent capped at ₹2,000 per day for
                          standard room. Super Deluxe or Premium rooms not
                          covered.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle
                          size={16}
                          className="text-red-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span>
                          Clause 7.3: Food, dietary supplements and personal
                          care items not covered.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span>
                          Clause 5.1: Medications and consumables covered up to
                          100% of prescribed amount.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span>
                          Clause 5.4: Diagnostic tests covered up to 100% of
                          approved rates.
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
                      <span className="font-bold">&lt; ₹2 lakhs</span>
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

              <div className="p-4">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                      <AlertCircle size={16} className="text-red-500 mr-2" />
                      Room Upgrade Charges
                    </h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Standard Room (Covered):
                        </span>
                        <span>₹2,000 × 3 nights = ₹6,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Super Deluxe Room (Actual):
                        </span>
                        <span>₹6,667 × 3 nights = ₹20,000</span>
                      </div>
                      <div className="flex justify-between font-medium pt-1 border-t border-gray-200">
                        <span>Excess Amount:</span>
                        <span className="text-red-600">₹14,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                      <AlertCircle size={16} className="text-red-500 mr-2" />
                      Non-Medical Expenses
                    </h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Food Charges:</span>
                        <span>₹1,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Dietary Supplements:
                        </span>
                        <span>₹6,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Personal Care Items:
                        </span>
                        <span>₹2,000</span>
                      </div>
                      <div className="flex justify-between font-medium pt-1 border-t border-gray-200">
                        <span>Total Non-Medical:</span>
                        <span className="text-red-600">₹9,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-medium text-red-800 mb-2">
                    Total Non-Claimable Charges
                  </h4>
                  <div className="flex items-center text-red-700">
                    <div className="flex-1 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between px-2">
                        <span>Room Upgrade:</span>
                        <span className="font-medium">₹14,000</span>
                      </div>
                      <div className="flex justify-between px-2">
                        <span>Food Charges:</span>
                        <span className="font-medium">₹1,000</span>
                      </div>
                      <div className="flex justify-between px-2">
                        <span>Supplements:</span>
                        <span className="font-medium">₹6,000</span>
                      </div>
                      <div className="flex justify-between px-2">
                        <span>Personal Items:</span>
                        <span className="font-medium">₹2,000</span>
                      </div>
                    </div>
                    <div className="ml-4 pl-4 border-l border-red-200">
                      <div className="text-xl font-bold">₹27,000</div>
                      <div className="text-xs">Not eligible for claim</div>
                    </div>
                  </div>
                </div>
              </div>
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
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center">
                <Printer size={14} className="mr-1" /> Print Report
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden max-w-4xl mx-auto">
              <div className="bg-blue-600 text-white p-3">
                <h3 className="font-semibold">Claim Assessment Report</h3>
                <p className="text-xs opacity-75">
                  Claim #CL-20250217-85462 | Generated on 17 Feb 2025, 10:42 AM
                </p>
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
                          <span className="font-medium">Raj Kumar Singh</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">
                            Policy Number
                          </span>
                          <span className="font-medium">FHPL-HI-45872</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Member ID</span>
                          <span className="font-medium">MEM-82746</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-gray-500 block">Hospital</span>
                          <span className="font-medium">
                            City Care Hospital
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">
                            Admission Period
                          </span>
                          <span className="font-medium">
                            10 Feb - 13 Feb 2025
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
                        <span className="font-medium">₹63,700</span>
                      </div>
                      <div className="flex justify-between mb-2 pb-2 border-b border-gray-200">
                        <span className="text-gray-600">
                          Non-Claimable Amount:
                        </span>
                        <span className="font-medium text-red-600">
                          ₹27,000
                        </span>
                      </div>
                      <div className="flex justify-between mb-2 pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Claimable Amount:</span>
                        <span className="font-medium text-green-600">
                          ₹36,700
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

                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Detailed Reasoning
                  </h4>
                  <div className="bg-blue-50 p-4 rounded border border-blue-100 text-blue-800">
                    <h5 className="font-medium mb-2">
                      Why ₹27,000 was rejected:
                    </h5>
                    <ul className="text-sm space-y-3">
                      <li className="flex items-start">
                        <AlertCircle
                          size={16}
                          className="text-red-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium mb-1">
                            Super Deluxe Room (₹14,000 excess)
                          </p>
                          <p className="text-blue-700">
                            According to Clause 4.2 of the policy, room rent is
                            capped at ₹2,000 per day. The patient opted for a
                            Super Deluxe room at ₹6,667 per day, resulting in an
                            excess charge of ₹14,000 over 3 days that is not
                            covered per policy terms.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle
                          size={16}
                          className="text-red-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium mb-1">
                            Food and Supplements (₹7,000)
                          </p>
                          <p className="text-blue-700">
                            As per Clause 7.3, food charges (₹1,000) and dietary
                            supplements (₹6,000) are excluded from coverage.
                            These items must be covered by the patient as
                            outlined in the policy document section 7.3.1.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle
                          size={16}
                          className="text-red-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium mb-1">
                            Personal Care Items (₹2,000)
                          </p>
                          <p className="text-blue-700">
                            Personal care items totaling ₹2,000 are not eligible
                            for coverage as specified in Clause 7.3.2 of the
                            policy document.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span className="font-medium">
                      Approved Amount: ₹36,700
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Processed by</span>
                    <span className="ml-1 font-medium">
                      AI Claims Assistant + Human Review
                    </span>
                  </div>
                  <div>
                    <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                      View Complete Policy
                    </button>
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
