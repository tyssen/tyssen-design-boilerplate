<?php
$docroot = $_SERVER['DOCUMENT_ROOT']."/";
$title = "Contact";
$pageTitle = $title;
$pageDescription = "";
$parent = "contact";
$page = "contact";
include($docroot.'assets/inc/header.htm');
?>
			<form class="jotform-form" action="http://submit.jotform.​me/submit.php" method="post" name="form_20091416454" id="20091416454">
				<div>
					<input type="hidden" name="formID" value="20091416454">
					<label for="name">Name: <img src="/assets/img/asterisk.png" width="8" height="7" alt="Required"></label>
					<input type="text" required aria-required="true" name="q1_name" id="name" class="required"><br>
					<label for="phone">Phone: <img src="/assets/img/asterisk.png" width="8" height="7" alt="Required"></label>
					<input type="text" required aria-required="true" name="q3_phone" id="phone" class="required"><br>
					<label for="email">Email:</label>
					<input type="email" name="q4_email" id="email"><br>
					<label for="suburb">Suburb:</label>
					<input type="text" name="q5_suburb" id="suburb"><br>
					<label for="message">Message: <img src="/assets/img/asterisk.png" width="8" height="7" alt="Required"></label>
					<textarea required aria-required="true" name="q6_message" id="message" cols="30" rows="5" class="required"></textarea><br>
					<!-- <fieldset>
						<legend>Please contact me by</legend>
						<input type="radio" name="contact_by" id="preferred-phone" value="Phone"><label for="preferred-phone">Phone</label>
						<input type="radio" name="contact_by" id="preferred-email" value="Email"><label for="preferred-email">Email</label>
					</fieldset> -->
					<button type="submit">Send details</button>
					<input name="required" type="hidden" id="required" value="name, email, phone, enquiry">
					<p><small><img src="/assets/img/asterisk.png" width="8" height="7" alt="Required"> indicates required information</small></p>
				</div>
			</form>

<?php include($docroot.'assets/inc/footer.htm'); ?>