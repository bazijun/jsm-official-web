pipeline {
    agent any
    environment {
        ALICLOUD_ACCESS = 'default'
        ALICLOUD_ACCESS_KEY_ID     = credentials('jenkins-alicloud-access-key-id')
        ALICLOUD_ACCESS_KEY_SECRET     = credentials('jenkins-alicloud-access-key-secret')
    }
    tools {
        nodejs "nodeJs18.16.0"
    }
    stages {
        stage('Which NodeJS') {
           steps{
               withEnv(["PATH+NODEJS=${tool 'nodeJs18.16.0'}/bin"]) {
                   sh 'which node' // Works properly
                   sh 'node -v' // Expected 6.9.x version
                   sh 'npm -v' // Expected 3.x version
               }
           }
        }
        stage('Setup') {
            steps {
                sh 'chmod +x scripts/setup.sh'
                sh 'scripts/setup.sh'
            }
        }
    }
}
