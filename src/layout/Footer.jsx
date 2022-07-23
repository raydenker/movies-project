function Footer() {
    return (
        <footer className="page-footer light-blue darken-4">

            <div className="footer-copyright light-blue darken-4">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="/">Repo</a>
                </div>
            </div>
        </footer>
    )
}
export { Footer }