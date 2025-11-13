pipeline {
    agent any

    stages {

        stage('Préparation') {
            steps {
                echo "Pipeline Jenkins lancé par Jean Martial Zedia"
                echo "Début de l'intégration GitHub -> Jenkins 🔥"
            }
        }

        stage('Checkout GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/Martialzedja/jenkins-ci-cd-demo.git'
            }
        }

        stage('Build') {
            steps {
                echo "Construction de l'application..."
            }
        }

        stage('Tests') {
            steps {
                echo "Tests unitaires..."
            }
        }

        stage('Package') {
            steps {
                echo "Packaging..."
            }
        }

        stage('Deploiement Docker') {
            steps {
                echo "Déploiement Docker..."
            }
        }
    }
}
