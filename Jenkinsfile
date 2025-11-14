pipeline {
    agent any

    stages {

        stage('Préparation') {
            steps {
                echo "Pipeline Jenkins lancé par Jean Martial Zedia"
                echo "Code récupéré depuis GitHub via Jenkins SCM ✅"
            }
        }

        stage('Checkout GitHub') {
            steps {
                echo "Le code est déjà cloné par le stage Declarative: Checkout SCM."
                echo "Aucun git clone manuel nécessaire ici."
            }
        }

        stage('Build') {
            steps {
                echo "Construction de l'application..."
            }
        }

        stage('Tests') {
            steps {
                echo "Exécution des tests unitaires..."
            }
        }

        stage('Package') {
            steps {
                echo "Packaging de l'application..."
            }
        }

        stage('Deploiement Docker') {
            steps {
                echo "Déploiement dans un conteneur Docker (simulation)..."
            }
        }
    }
}
