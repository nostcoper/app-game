pipeline {
    agent any
    
    stages {
        stage('Pre-deploy') {
            steps {
                // Ejecutar script predeploy
                script {
                    bat 'npm run start'
                }
            }
        }
        
        stage('Test') {
            steps {
                // Ejecutar script de test
                script {
                    bat 'npm run test'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Ejecutar script deploy
                script {
                    bat 'npm run deploy'
                }
            }
        }
    }
    
    post {
        always {
            // Limpieza final, si es necesario
            // Ejemplo: limpiar el workspace
            cleanWs()
        }
    }
}
