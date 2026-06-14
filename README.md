# DOKB-OS 🤖
## AI Orchestration System

Multi-Agent AI Orchestrator untuk ekosistem DOKB,
menyatukan Chatty, Gemmy, dan Claudia
dalam satu workspace kolaboratif.

---

## 👥 Agent Team

| Agent | Model | Role |
|-------|-------|------|
| Chatty | GPT-5.5 | Chief System Architect |
| Gemmy | Gemma 3 31B | Lead Software Engineer |
| Claudia | Claude Opus 4.8 | QA Architect |

---

## 🔄 Workflow

```
Founder (Pak Jani)
    ↓ task
Router → Agent yang tepat
    ↓
Chatty → Blueprint
    ↓
Claudia → Review Blueprint ✅
    ↓
Founder → Approval ✅
    ↓
Gemmy → Implement
    ↓
Claudia → Review Code ✅
    ↓
🚀 Production
```

---

## 📁 Struktur

```
dokb-os/
├── core/
│   ├── agents/
│   │   ├── founder.ts
│   │   ├── chatty.ts
│   │   ├── gemmy.ts
│   │   └── claudia.ts
│   ├── approval.ts
│   ├── registry.ts
│   ├── router.ts
│   └── workflow.ts
├── .env.example
├── .gitignore
├── index.ts
└── README.md
```

---

## 🚀 Quick Start

```bash
cp .env.example .env
# Isi API keys di .env

npm install
npm run dev
```

---

## 🔑 Environment

```
ANTHROPIC_API_KEY  → Claudia
OPENAI_API_KEY     → Chatty
GOOGLE_API_KEY     → Gemmy
```

---

*Built by Founder: Jani — DOKB 2025*
