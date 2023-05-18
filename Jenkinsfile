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
                   sh 'which node' 
                   sh 'node -v'
                   sh 'npm -v'
               }
           }
        }
        stage('Setup') {
            steps {
                // sh 'chmod +x scripts/setup.sh'
                // sh 'scripts/setup.sh'
                sh 'curl -o- -L http://cli.so/install.sh | bash'
                sh 'echo "source $(which nvm.sh)" >> ~/.bashrc'
                sh 's config add --AccessKeyID $ALICLOUD_ACCESS_KEY_ID --AccessKeySecret $ALICLOUD_ACCESS_KEY_SECRET -a $ALICLOUD_ACCESS'
                sh 'echo -------node--$(node -v)--node---------'
                sh 's deploy -y --use-local --access $ALICLOUD_ACCESS'
            }
        }
    }
}
