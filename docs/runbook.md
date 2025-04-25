
# 🛠️ Operations Runbook

> This document serves as a quick reference for operational tasks and emergency procedures for the Note App.

---

## 🔄 Restarting Services

### Using SSH into EC2
1. SSH into the EC2 instance:
   ```bash
   ssh -i path/to/key.pem ec2-user@your-ec2-ip
   ```
2. Navigate to the app directory:
   ```bash
   cd ~/note-saas
   ```
3. Restart Docker containers:
   ```bash
   docker compose down && docker compose up -d
   ```

---

## 🖥️ EC2 Access Steps

- **Instance Name**: Note SaaS App Server
- **Region**: ap-south-1 (example)
- **SSH Key Location**: Stored in 1Password / Vault
- **Username**: ec2-user
- **IP Address**: `xx.xx.xx.xx` *(update with your actual IP)*

---

## ⚙️ CI/CD Troubleshooting

### GitHub Actions Failing?
- Check `.github/workflows/ci.yml` and `deploy.yml`.
- Use logs from the failed job to debug.
- Try running failing steps manually:
   ```bash
   npm install
   npm run test
   ```

### Common Fixes
- **Dependency conflicts**: Add `--legacy-peer-deps` to `npm install`.
- **Missing secrets**: Ensure `GH_TOKEN`, `DEPLOY_KEY`, etc., are set.

---

## 🗃️ Database Backup & Restore

### Backup
```bash
docker exec -t note-db pg_dump -U postgres noteapp > backup.sql
```

### Restore
```bash
docker exec -i note-db psql -U postgres noteapp < backup.sql
```

---

## 🚨 Incident Response

| Type of Incident      | Contact         | Responsibility       |
|-----------------------|-----------------|-----------------------|
| App Down              | @you            | Restart app containers |
| DB Connection Failed  | @you            | Check DB logs, restore |
| Security Breach       | @you + mentor   | Revoke keys, notify team |

---

## 📅 Maintenance Tasks

- **Weekly**: Check GitHub Actions logs, security alerts.
- **Monthly**: Backup the DB, update dependencies.
- **Quarterly**: Review CI/CD configs and IAM roles.

---

> Last Updated: 2025-04-25
