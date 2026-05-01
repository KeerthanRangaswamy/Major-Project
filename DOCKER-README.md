# Docker Setup - Local Development

## Prerequisites
- Docker Desktop installed
- 4GB+ RAM allocated to Docker

## Quick Start

### 1. Create `.env` file
```bash
cp .env.docker .env
```
Edit `.env` and update if needed (optional - defaults work for local development)

### 2. Start Everything
```bash
docker-compose up --build
```

First run takes 5-10 minutes. Subsequent runs take ~20-30 seconds.

### 3. Access Application
- **Frontend**: http://localhost:5173
- **Backend Health**: http://localhost:4000/api/health
- **ML Service Docs**: http://localhost:8001/docs
- **MongoDB**: localhost:27017

## Common Commands

```bash
# View logs
docker-compose logs -f                  # All services
docker-compose logs -f backend          # Specific service

# Stop
docker-compose stop                     # Stop (keep containers)
docker-compose down                     # Stop (remove containers)

# Access container
docker-compose exec backend sh          # Backend shell
docker-compose exec mongodb mongosh -u admin -p password

# Reset everything
docker-compose down -v
docker-compose up --build
```

## What's Running

| Service | Port | Type |
|---------|------|------|
| Frontend | 5173 | React/Vite |
| Backend | 4000 | Express/TypeScript |
| ML Service | 8001 | FastAPI/Python |
| MongoDB | 27017 | Database |

All services communicate via `healthvoice-network`. 

## Architecture

```
Frontend (React)
    ↓ http://backend:4000
Backend (Express) 
    ├─ mongodb://mongodb:27017 → MongoDB
    └─ http://ml-service:8001 → ML Service
```

Services share a private Docker network - they reach each other by service name, not IPs.

## Data Persistence

- **mongodb_data** volume - Database files persist across restarts
- **backend_uploads** volume - Uploaded audio files
- **node_modules** volumes - Dependency caching

When you `docker-compose down`, data is preserved. Use `docker-compose down -v` to delete volumes.

## Environment Variables (.env)

All services read from `.env` file:
- `MONGO_PASSWORD` - MongoDB admin password
- `SESSION_SECRET` - Express session key
- `NODE_ENV` - development/production
- `CLIENT_URL` - Frontend URL for CORS
- `MODEL_BASE_URL` - ML service URL

For local development, defaults in `.env.docker` work fine.

## Troubleshooting

**Services won't start:**
```bash
docker-compose logs
```

**Port already in use:**
Change ports in `.env` and restart

**Out of memory:**
Docker Settings → Resources → Increase RAM allocation

**Clean reset:**
```bash
docker-compose down -v
docker-compose up --build
```

That's it! Everything runs in Docker now.
