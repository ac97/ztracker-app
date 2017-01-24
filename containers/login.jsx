
const loginView = function (){
	render(
		        <div id="login-container">
		            <div class="logo-holder">
		                <img src="styles/images/zoop_logo.JPG">
		            </div>            
		            <input type="text" id="username" class="form-control" placeholder="Username" />
		            <input type="password" id="password" class="form-control" placeholder="Password" />
		            <input type="button" id="btn-submit" class="btn btn-primary" value="LOGIN">
		            <div id="error-msg" class="alert alert-danger"></div>            
		        </div>        
	)
}

