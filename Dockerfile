# Gunakan node versi LTS sebagai base image
FROM node:lts

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh project ke dalam working directory
COPY . .

# Expose port yang digunakan oleh Vite (biasanya 5173)
EXPOSE 5173

# Jalankan perintah untuk development (Vite)
CMD ["npm", "run", "dev"]
