package main

import (
	"log"
	"net/http"
	"os"

	"matchsticks/backend/internal/httpserver"
)

func main() {
	addr := os.Getenv("ADDR")
	if addr == "" {
		addr = ":8080"
	}

	log.Printf("listening on %s", addr)
	if err := http.ListenAndServe(addr, httpserver.New()); err != nil {
		log.Fatal(err)
	}
}
