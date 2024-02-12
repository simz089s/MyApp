package main

import "net/http"

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello from Go backend!"))
	})
	http.ListenAndServe(":8080", nil)
}
