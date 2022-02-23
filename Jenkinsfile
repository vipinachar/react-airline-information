pipeline {
    agent any
    environment
    {
        ssh_command = 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-18-191-139-46.us-east-2.compute.amazonaws.com'
        project_name = 'react-airline'
    }
    stages {
        stage('GIT Pull')
        {
            steps{
            sh 'git -C ./react-airline-information pull'
            }
        }
        stage('Build Docker Image and export')
        {
            steps{
            dir("react-airline-information")
            {
            sh 'docker build -t ${project_name}:${BUILD_NUMBER} .'
            sh 'docker save ${project_name}:${BUILD_NUMBER} > ${project_name}-${BUILD_NUMBER}.tar'
            }
                
            }
        }
         stage('SCP to AWS ec2') {
            steps{
                sshagent(['Amazon ec2'])
                {
                    dir("react-airline-information"){
                    sh 'scp ${project_name}-${BUILD_NUMBER}.tar ec2-user@ec2-18-191-139-46.us-east-2.compute.amazonaws.com:.'
                    sh 'rm /var/lib/jenkins/workspace/react-app-airline-information/react-airline-information/${project_name}-${BUILD_NUMBER}.tar'
                    }
                
                }
            }
        }
        stage('Docker Run')
        {
            steps
            {
                sshagent(['Amazon ec2'])
                {
                    sh '${ssh_command} ls'
                    sh '${ssh_command} docker load --input ${project_name}-${BUILD_NUMBER}.tar'
                    sh '${ssh_command} docker run --rm -p 3001:3000 ${project_name}:${BUILD_NUMBER} > output &'
            
                }    
            }
        }
    }
}
