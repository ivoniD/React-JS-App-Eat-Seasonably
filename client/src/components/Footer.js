export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="grid_12">
            <div className="socials">
              <a href="#" className="fa fa-twitter" />
              <a href="#" className="fa fa-facebook" />
              <a href="#" className="fa fa-google-plus" />
              <a href="#" className="fa fa-pinterest" />
            </div>
            <div className="copyright">
              <span className="brand">Bliss </span> © <span id="copyright-year" />{" "}
              | <a href="#">Privacy Policy</a>{" "}
              <div>
                Website designed by{" "}
                <a href="http://www.templatemonster.com/" rel="nofollow">
                  TemplateMonster.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}