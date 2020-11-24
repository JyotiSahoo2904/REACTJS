pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				//bat 'CALL PublishAll.bat'
				bat 'CALL npm install'
				
				bat 'CALL npm build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}