import React from "react";
import { TextField, Button } from "@material-ui/core";

const SignUp0 = ({ handleOnChange, form, errorMessage }) => {
	return (
		<>
			<TextField
				error={errorMessage}
				id="firstName"
				name="first_name"
				value={form.first_name}
				label="First Name"
				variant="outlined"
				autoFocus
				helperText={errorMessage ? "Please fill out this field" : ""}
				onChange={handleOnChange}
				type="text"
				required
			/>
			<TextField
				error={errorMessage}
				id="lastName"
				name="last_name"
				value={form.last_name}
				label="Last Name"
				variant="outlined"
				helperText={errorMessage ? "Please fill out this field" : ""}
				onChange={handleOnChange}
				type="text"
				required
			/>
			<TextField
				error={errorMessage}
				id="email"
				name="email"
				value={form.email}
				label="Email"
				variant="outlined"
				helperText={errorMessage ? "Please fill out this field" : ""}
				onChange={handleOnChange}
				type="email"
				required
			/>
			<TextField
				error={errorMessage}
				id="barNumber"
				name="bar_number"
				value={form.bar_number}
				label="Bar Number"
				variant="outlined"
				helperText={errorMessage ? "Please fill out this field" : ""}
				onChange={handleOnChange}
				type="number"
				required
			/>
		</>
	);
};

const SignUp1 = ({ handleOnChange, form }) => {
	return (
		<>
			<TextField
				id="password"
				name="password"
				value={form.password}
				label="Password"
				variant="outlined"
				onChange={handleOnChange}
				type="Password"
				autoFocus
				required
			/>
			<TextField
				id="repeatPassword"
				name="repPassword"
				value={form.password}
				label="Repeat Password"
				variant="outlined"
				onChange={handleOnChange}
				type="Password"
				required
			/>
		</>
	);
};

const SignUp2 = ({ handleUpload, form }) => {
	return (
		<>
			<Button variant="contained" component="label" onChange={handleUpload}>
				Upload File
				<input type="file" style={{ display: "none" }} />
			</Button>
		</>
	);
};

export { SignUp0, SignUp1, SignUp2 };
