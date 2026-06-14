import { Founder } from "./agents/founder";

export const ApprovalGate = {
  checkReadiness(qaReport: string): boolean {
    console.log(`\n🛡️ [Approval Gate]: Memeriksa kesiapan rilis berdasarkan laporan QA...`);
    return qaReport.includes("Aman") || qaReport.includes("Sesuai Standar");
  },

  grantFinalApproval(featureName: string): void {
    console.log(`👑 [Approval Gate]: ${Founder.nama} (${Founder.role}) memberikan Lampu Hijau 🟢`);
    console.log(`🚀 Fitur [${featureName}] SIAP UNTUK DEPLOY KE DMIP PLATFORM!\n`);
  }
};
