package main

import (
	"encoding/json"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// w.Write([]byte("Hello from Go backend!"))
		// w.Write([]byte("{message: \"Hello from Go backend!\"}"))
		type GoBackendResponse struct {
			Message string
		}
		go_backend_response := []GoBackendResponse{
			{Message: "Hello from Go backend!"},
		}
		response, _ := json.Marshal(go_backend_response)
		w.Header().Set("Content-Type", "application/json")
		w.Write(response)
	})
	http.ListenAndServe(":8080", nil)
}
