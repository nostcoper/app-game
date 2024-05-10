pipeline {
    agent any

    stages {
        stage('Pre-deploy') {
            steps {
                bat 'npx react-scripts build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                bat 'npm run deploy'
            }
        }
    }
}
