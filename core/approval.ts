import { TaskPacket } from "./router";

export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface ApprovalRecord {
  packet: TaskPacket;
  status: ApprovalStatus;
  reason?: string;
  approvedAt?: string;
}

export const ApprovalGate = {
  pending: [] as ApprovalRecord[],

  submit(packet: TaskPacket): ApprovalRecord {
    const record: ApprovalRecord = {
      packet,
      status: "pending",
    };
    this.pending.push(record);
    console.log(`⏳ [Approval]: Tugas "${packet.id}" menunggu persetujuan Founder...`);
    return record;
  },

  approve(packetId: string, reason?: string): ApprovalRecord | null {
    const record = this.pending.find(r => r.packet.id === packetId);
    if (!record) {
      console.log(`❌ [Approval]: Tugas "${packetId}" tidak ditemukan.`);
      return null;
    }
    record.status = "approved";
    record.reason = reason;
    record.approvedAt = new Date().toISOString();
    console.log(`✅ [Approval]: Tugas "${packetId}" disetujui Founder.`);
    return record;
  },

  reject(packetId: string, reason: string): ApprovalRecord | null {
    const record = this.pending.find(r => r.packet.id === packetId);
    if (!record) return null;
    record.status = "rejected";
    record.reason = reason;
    console.log(`🚫 [Approval]: Tugas "${packetId}" ditolak. Alasan: ${reason}`);
    return record;
  },

  getPending(): ApprovalRecord[] {
    return this.pending.filter(r => r.status === "pending");
  }
};
