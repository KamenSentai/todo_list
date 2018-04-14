<!-- Home form -->
<form action="./<?= $_GET["page"]; ?>:error" method="post" class="account">
    <!-- Name -->
    <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        value="<?= $_POST["name"]; ?>"
    >
    <div class="border">
        <span class="message"><?= !empty($errorMessages["name"]) ? $errorMessages["name"] : ''; ?></span>
    </div>
    <br>
    <!-- Password -->
    <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        value="<?= $_POST["password"]; ?>"
    >
    <div class="border">
        <span class="message"><?= !empty($errorMessages["password"]) ? $errorMessages["password"] : ''; ?></span>
    </div>
    <br>
    <!-- Confirmation password -->
    <?php if ($_GET["page"] == 'register'): ?>
        <input
            id="confirmation"
            type="password"
            name="confirmation"
            placeholder="Confirm password"
            value="<?= $_POST["confirmation"]; ?>"
        >
        <div class="border">
            <span class="message"><?= !empty($errorMessages["confirmation"]) ? $errorMessages["confirmation"] : ''; ?></span>
        </div>
        <br>
    <?php endif; ?>
    <!-- Submit -->
    <input type="submit" value="<?= $options[$_GET["page"]]; ?>">
</form>
<?php unset($options[$_GET["page"]]); ?>
<!-- Change page -->
<a class="redirection" href="<?= key($options); ?>" title="<?= $options[key($options)]; ?>"><?= $options[key($options)]; ?></a>