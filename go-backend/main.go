package main

import (
	"encoding/json"
	"net/http"
)

type Response struct {
	Status     string `json:"status"`
	StatusCode int    `json:"statusCode"`
	Message    string `json:"message,omitempty"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// w.Write([]byte("Hello from Go backend!"))
		// w.Write([]byte("{message: \"Hello from Go backend!\"}"))
		json_response := &Response{
			Status:     "success",
			StatusCode: 200,
			Message:    "Hello from Go backend!",
		}
		response, _ := json.Marshal(json_response)
		// json.NewEncoder(w).Encode(json_response)
		w.Header().Set("Content-Type", "application/json")
		w.Write(response)
	})
	http.ListenAndServe(":8080", nil)
}
