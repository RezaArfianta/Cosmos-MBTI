package main

import (
	"embed"
	"io/fs"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

//go:embed templates/home-page
var home_page embed.FS

//go:embed templates/result-page
var result_page embed.FS

func main(){
	router := httprouter.New()

	router.GET("/",func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		http.Redirect(w,r,"/home",http.StatusSeeOther)
	})

	directory,_ := fs.Sub(home_page,"templates/home-page")
	router.ServeFiles("/home/*filepath",http.FS(directory))

	directory,_ = fs.Sub(result_page,"templates/result-page")
	router.ServeFiles("/result/*filepath",http.FS(directory))
	

	server := http.Server{
		Addr: "localhost:8080",
		Handler: router,
	}
	err := server.ListenAndServe()
	if err != nil{
		panic(err)
	}

}