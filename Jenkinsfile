pipeline {
  agent any
  stages {
    stage("Git checkout") {
      steps {
        git branch: "main", url: "https://github.com/dangbado1703/base-FE-vite.git"
      }
    }
    stage("Clone") {
      steps {
        git "https://github.com/dangbado1703/base-FE-vite.git"
      }
    }
  }
}