# PUC-PR DevOps Project

A comprehensive DevOps project developed for the DevOps discipline at Pontifícia Universidade Católica do Paraná (PUC-PR).

## 🚀 About This Project

This project serves as a practical implementation of DevOps principles and practices, featuring a robust backend API built with **NestJS** - a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.

## 🎯 Why NestJS?

I chose NestJS for this DevOps discipline project because I'm passionate about Node.js development, and NestJS represents the optimal framework for rapidly building production-ready servers. Here are the key advantages that influenced my decision:

### ✨ **Architecture & Design Patterns**
- **Modular Architecture**: Built with a modular structure that promotes code organization and reusability
- **Dependency Injection**: Built-in DI container that makes testing and maintenance significantly easier
- **Decorators & Metadata**: Leverages TypeScript decorators for clean, declarative code
- **Enterprise Patterns**: Implements proven enterprise patterns like Repository, Service Layer, and more

### 🚀 **Development Speed & Productivity**
- **Rapid Prototyping**: Quick setup and scaffolding for new features
- **TypeScript First**: Full TypeScript support with excellent IntelliSense and error catching
- **Built-in Tools**: CLI tools for generating components, services, and modules
- **Hot Reload**: Development server with automatic reloading

### 🔒 **Security & Reliability**
- **Built-in Security**: Guards, interceptors, and middleware for robust security
- **Validation**: Automatic request validation using DTOs and class-validator
- **Error Handling**: Comprehensive error handling and exception filters
- **Testing**: Excellent testing support with Jest integration

### 📈 **Scalability & Performance**
- **Microservices Ready**: Built-in support for microservices architecture
- **Performance**: High-performance Node.js runtime with async/await support
- **Caching**: Built-in caching mechanisms and Redis integration
- **Load Balancing**: Easy integration with load balancers and reverse proxies

### 🛠️ **DevOps Integration**
- **Containerization**: Easy to containerize with Docker
- **CI/CD Friendly**: Clean project structure that works seamlessly with CI/CD pipelines
- **Environment Management**: Built-in configuration management for different environments
- **Logging & Monitoring**: Structured logging and monitoring capabilities

## 🏗️ Project Structure

```
src/
├── app/                 # Main application module
├── users/              # Users module with CRUD operations
├── organizations/      # Organizations module
└── main.ts            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pucpr-dev-ops
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   # Development mode
   npm run start:dev
   
   # Production mode
   npm run start:prod
   ```

## 🧪 Available Scripts

```bash
# Development
npm run start:dev      # Start in development mode with hot reload
npm run start:debug    # Start in debug mode
npm run start:prod     # Start in production mode

# Testing
npm run test           # Run unit tests
npm run test:e2e      # Run end-to-end tests

# Code Quality
npm run lint          # Run ESLint with auto-fix
npm run build         # Build the application
```

## 🔧 Configuration

### ESLint & Prettier
This project uses ESLint and Prettier for code quality and formatting:
- **ESLint**: TypeScript-aware linting with custom rules for NestJS best practices
- **Prettier**: Code formatting with consistent style rules

### TypeScript
- Strict TypeScript configuration
- Build optimization for production

## 📚 API Endpoints

The application provides the following endpoints:
- **Users**: CRUD operations for user management
- **Organizations**: CRUD operations for organization management

## 🚀 DevOps Features

This project demonstrates various DevOps practices:
- **Code Quality** with ESLint and Prettier
- **Testing** with Jest
- **TypeScript** for type safety
- **Modular Architecture** for scalability

## 📝 Language Choice

This README and project documentation are written in English to follow the standard practices commonly applied in software development projects. English is the de facto language for:
- Technical documentation
- Open-source projects
- International development teams
- Industry best practices
- Professional software development

## 📄 License

This project is developed for educational purposes as part of the DevOps discipline at PUC-PR.

## 👨‍💻 Author

**Nathan Queiroz** - DevOps Discipline Student at PUC-PR

---

**Note**: This project is part of the DevOps discipline curriculum at Pontifícia Universidade Católica do Paraná (PUC-PR).