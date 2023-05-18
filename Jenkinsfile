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
        stage('Setup') {
            steps {
                sh 'chmod +x scripts/setup.sh'
                sh 'scripts/setup.sh'
            }
        }
    }
}
