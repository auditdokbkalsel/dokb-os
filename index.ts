// ============================================================================
// DOKB-OS Core Engine Execution Test
// Version : 1.0
// Author  : Jani (Founder & Product Owner)
// ============================================================================

import { DOKBWorkflow } from "./core/workflow";
import { ApprovalGate } from "./core/approval";
import { Founder } from "./core/agents/founder";

async function main() {
  const orchestrator = new DOKBWorkflow();

  // 1. Perintah awal dari Jani (Founder)
  const visiProyek = "Bangun modul intelijen rute teroptimasi untuk DMIP Platform.";
  
  // 2. Jalankan siklus kolaborasi otomatis (Chatty -> Gemmy -> Claudia)
  const hasilRapat = await orchestrator.executeSequence(visiProyek);

  // 3. Masuk ke gerbang persetujuan Founder
  const siapRilis = ApprovalGate.checkReadiness(hasilRapat.qaReport);

  if (siapRilis) {
    // 4. Jani memberikan Final Approval
    ApprovalGate.grantFinalApproval("DMIP Route Intelligence Module");
  } else {
    console.log(`❌ [Approval Gate]: Fitur ditolak oleh ${Founder.nama}. Perlu revisi tim internal.`);
  }
}

// Jalankan simulasi inti DOKB-OS
main().catch((err) => console.error("Error pada DOKB-OS Engine:", err));
