pipeline{
    agent any
    tools {
        docker 'docker'
    }
    stages{
        stage("git checkout"){
            steps{
               git branch: 'main', credentialsId: 'git-cred', url: 'https://github.com/okueca/okueca-app.git' 
            }       
        }


        stage("build docker image"){
            steps{
                script{
                    withDockerRegistry(credentialsId: 'docker-cred', toolName: 'docker') {
                    sh 'docker build -t okueca/okueca-app:latest .'
                    }
                }
            }
        }
    }
}