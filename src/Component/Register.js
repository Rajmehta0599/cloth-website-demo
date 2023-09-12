import React from 'react';
import './Register.css';
function Register() {
	return (
		<>
			{/* <!-- Body of Form starts --> */}
			<div class="container">
				<form action='/register' method="post" autocomplete="on">
					{/* <!--First name--> */}
					<div class="box">
						<label for="firstName" class="fl fontLabel"> First Name: </label>
						<div class="new iconBox">
							<i class="fa fa-user" aria-hidden="true"></i>
						</div>
						<div class="fr">
							<input type="text" name="firstName" placeholder="First Name"
								class="textBox" autofocus="on" required />
						</div>
						<div class="clr"></div>
					</div>
					{/* <!--First name--> */}


					{/* <!--Second name--> */}
					<div class="box">
						<label for="secondName" class="fl fontLabel"> Seconed Name: </label>
						<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
						<div class="fr">
							<input type="text" required name="secondName"
								placeholder="Last Name" class="textBox" />
						</div>
						<div class="clr"></div>
					</div>
					{/* <!--Second name--> */}


					{/* <!---Phone No.------> */}
					<div class="box">
						<label for="phone" class="fl fontLabel"> Phone No.: </label>
						<div class="fl iconBox"><i class="fa fa-phone-square" aria-hidden="true"></i></div>
						<div class="fr">
							<input type="text" required name="phoneNo" maxlength="10" placeholder="Phone No." class="textBox" />
						</div>
						<div class="clr"></div>
					</div>
					{/* <!---Phone No.----> */}


					{/* <!---Email ID----> */}
					<div class="box">
						<label for="email" class="fl fontLabel"> Email ID: </label>
						<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
						<div class="fr">
							<input type="email" required name="email" placeholder="Email Id" class="textBox" />
						</div>
						<div class="clr"></div>
					</div>
					{/* <!--Email ID-----> */}


					{/* <!---Password------> */}
					<div class="box">
						<label for="password" class="fl fontLabel"> Password </label>
						<div class="fl iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
						<div class="fr">
							<input type="Password" required name="password" placeholder="Password" class="textBox" />
						</div>
						<div class="clr"></div>
					</div>
					{/* <!---Password----> */}

					{/* <!---Gender-----> */}
					<div class="box radio">
						<label for="gender" class="fl fontLabel"> Gender: </label>
						<input type="radio"  name="Gender" value="Male" required/> Male &nbsp; &nbsp; &nbsp; &nbsp;
						<input type="radio"  name="Gender" value="Female" required/> Female
					</div>
					{/* <!---Gender---> */}


					{/* <!--Terms and Conditions------> */}
					<div class="box terms">
						<input type="checkbox" name="Terms" required /> &nbsp; I accept the terms and conditions
					</div>
					{/* <!--Terms and Conditions------> */}


					{/* <!---Submit Button------> */}
					<div class="box" >
						<input type="Submit" name="Submit" class="submit" value="SUBMIT" />
					</div>
					{/* <!---Submit Button-----> */}
				</form>
			</div>

			{/* <!--Body of Form ends---> */}

		</>
	);
}

export default Register;