pipeline{
    agent any
    tools {
        docker 'docker'
        nodejs 'nodejs'
    }
    stages{
        stage("git checkout"){
            steps{
               git branch: 'main', credentialsId: 'git-cred', url: 'https://github.com/okueca/okueca-app.git' 
            }       
        }

        stage("test"){
            steps{
                sh 'npm install'
                sh 'npx next lint'
            }
        }

        stage("build app"){
            steps{
                sh 'npx next build'
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