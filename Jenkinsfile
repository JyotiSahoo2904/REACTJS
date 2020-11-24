pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				//bat 'CALL PublishAll.bat'
				bat 'CALL D:\\GITRepository\\REACTJS\\CITYWHEATHER\\npm install'
				
				bat 'CALL D:\\GITRepository\\REACTJS\\CITYWHEATHER\\npm build'
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