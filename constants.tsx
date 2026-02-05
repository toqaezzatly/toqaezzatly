
import React from 'react';
import { Shield, Code, Terminal, Globe, Server, Cpu, Database, Network } from 'lucide-react';
import { SkillCategory, Project, Experience, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Toqa Ayman Gomaa",
  title: "Cybersecurity Engineer & Penetration Tester",
  email: "toqaezzatly@gmail.com",
  phone: "+20 01---4",
  linkedin: "https://linkedin.com/in/toqa-ayman",
  github: "https://github.com/toqa-ayman",
  location: "Alexandria, Egypt"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cybersecurity Tools",
    skills: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "Nessus", "Mimikatz"],
    icon: "Shield"
  },
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "C / Embedded C", "Java", "Flask", "Node.js"],
    icon: "Code"
  },
  {
    title: "Networking",
    skills: ["TCP/IP", "Routing & Switching", "Network Security", "Protocol Analysis"],
    icon: "Network"
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Jenkins", "Git / CI/CD", "Ansible"],
    icon: "Server"
  },
  {
    title: "Web Technologies",
    skills: ["MERN Stack", "REST APIs", "MongoDB", "MySQL", "Django"],
    icon: "Globe"
  },
  {
    title: "Operating Systems",
    skills: ["Linux (Red Hat)", "Windows (PowerShell)", "Unix"],
    icon: "Terminal"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Secure IoT Monitoring System",
    category: "Graduation Project",
    grade: "A+",
    description: "Built a real-time worker safety monitoring system using STM32 microcontrollers and YOLO object detection. Integrated LoRa-based wireless communication.",
    tags: ["STM32", "YOLO", "LoRa", "Embedded", "Python"]
  },
  {
    title: "Juice Shop Pentesting Report",
    category: "Penetration Testing",
    description: "Detailed security audit of OWASP Juice Shop. Identified and documented XSS, SQLi, IDOR, and privilege escalation vulnerabilities with PoCs.",
    tags: ["Burp Suite", "OWASP", "Vulnerability Research", "Reporting"]
  },
  {
    title: "CTF Challenges Write-ups",
    category: "Personal Practice",
    description: "Solved 80+ challenges across PicoCTF and CyberTalents focusing on web exploitation, cryptography, and reverse engineering.",
    tags: ["CTF", "Reverse Engineering", "Web Exploitation", "Crypto"],
    link: "https://github.com/toqa-ayman/ctf-writeups"
  },
  {
    title: "Echo Talk – Real-Time Chat App",
    category: "Software Development",
    description: "Scalable real-time chat application using MERN stack and WebSocket (Socket.IO) with JWT authentication.",
    tags: ["MERN", "Socket.IO", "JWT", "MongoDB"],
    link: "https://github.com/toqa-ayman/echo-talk"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Penetration Testing Intern",
    company: "DEPI",
    period: "2024 - 6 months",
    description: "Identified and mitigated 15+ security flaws in real-world web applications.",
    details: ["Web application security assessments", "Vulnerability reporting", "Mitigation strategies"]
  },
  {
    role: "Orange Data Center Intern",
    company: "Orange",
    period: "2024 - 2 months",
    description: "Focused on CI/CD pipelines, NoSQL/SQL databases, and Secure SDLC practices.",
    details: ["Django development", "Database management", "Automated deployment"]
  },
  {
    role: "Cybersecurity Bootcamp Trainee",
    company: "CyberTalent",
    period: "2023 - 1 month",
    description: "Practiced exploitation and defense in simulated cyberattack labs.",
    details: ["Red vs Blue team scenarios", "Lab-based exploitation", "Defense mechanisms"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Practical Ethical Hacking (PEH)",
    issuer: "TCM Security",
    year: "2025",
    description: "Web app, wireless, and Active Directory attacks methodology."
  },
  {
    name: "eJPTv1 Certification",
    issuer: "Netriders",
    year: "2022",
    description: "Practical pentesting, auditing, and vulnerability assessment."
  },
  {
    name: "Cisco DevNet Associate",
    issuer: "Cisco",
    year: "2025",
    description: "APIs, automation, and programmable infrastructure."
  }
];
