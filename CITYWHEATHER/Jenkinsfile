pipeline {
  agent {
   image:'node:6-alpine'
   args: '-p 3000:3000'
  }
    
  
    
  stages {
        
    stage('Git Checkout') {
      steps {
        git branch: 'main', credentialsId: 'fa250d60-05c1-49a0-8758-1c8095a831c5', url: 'https://github.com/JyotiSahoo2904/REACTJS.git'
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
	  echo 'Test'
        //bat 'node test'
      }
    }
  }
}