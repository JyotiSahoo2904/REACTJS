pipeline {
  agent any
    
  
    
  stages {
        
    stage('Git Checkout') {
      steps {
        git branch: 'main', credentialsId: 'fa250d60-05c1-49a0-8758-1c8095a831c5', url: 'https://github.com/JyotiSahoo2904/REACTJS.git'
      }
    }
     
    stage('Build') {
      steps {
        bat 'npm install'
        bat 'npm build'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}