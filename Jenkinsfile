pipeline {
  agent any
    
  tools {REACTJS "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/JyotiSahoo2904/REACTJS.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm build'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}