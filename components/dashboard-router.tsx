import { OverviewDashboard } from "@/components/sections/overview-dashboard"
import { PatientManagement } from "@/components/sections/patient-management"
import { AppointmentCenter } from "@/components/sections/appointment-center"
import { MedicalRecords } from "@/components/sections/medical-records"
import { PrescriptionManagement } from "@/components/sections/prescription-management"
import { LabResults } from "@/components/sections/lab-results"
import { VitalSigns } from "@/components/sections/vital-signs"
import { BillingInsurance } from "@/components/sections/billing-insurance"
import { TelemedicineHub } from "@/components/sections/telemedicine-hub"
import { HealthAnalytics } from "@/components/sections/health-analytics"
import { MedicalInventory } from "@/components/sections/medical-inventory"
import { StaffManagement } from "@/components/sections/staff-management"
import { EmergencyCenter } from "@/components/sections/emergency-center"
import { ReportsDocuments } from "@/components/sections/reports-documents"

interface DashboardRouterProps {
  activeSection: string
}

export function DashboardRouter({ activeSection }: DashboardRouterProps) {
  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewDashboard />
      case "patients":
        return <PatientManagement />
      case "appointments":
        return <AppointmentCenter />
      case "medical_records":
        return <MedicalRecords />
      case "prescriptions":
        return <PrescriptionManagement />
      case "lab_results":
        return <LabResults />
      case "vital_signs":
        return <VitalSigns />
      case "billing":
        return <BillingInsurance />
      case "telemedicine":
        return <TelemedicineHub />
      case "analytics":
        return <HealthAnalytics />
      case "inventory":
        return <MedicalInventory />
      case "staff":
        return <StaffManagement />
      case "emergency":
        return <EmergencyCenter />
      case "reports":
        return <ReportsDocuments />
      default:
        return <OverviewDashboard />
    }
  }

  return <main className="flex-1 overflow-auto">{renderSection()}</main>
}
