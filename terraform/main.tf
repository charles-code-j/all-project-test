terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "2.28.1"
    }
  }
}

provider "digitalocean" {
  token = "dop_v1_94d3cdd150c45db3846e558ae2d676f4b255a5506b39e324379ad4a7c77adc66"
}

resource "digitalocean_kubernetes_cluster" "k8s" {
  name   = "k8s"
  region = "nyc1"
  version = "1.26.3-do.0"

  node_pool {
    name       = "k8s-elite"
    size       = "s-2vcpu-2gb"
    node_count = 1
  }
}

resource "local_file" "kubeconfig" {
  content  = digitalocean_kubernetes_cluster.k8s.kube_config.0.raw_config
  filename = "kubeconfig.yaml"
}

