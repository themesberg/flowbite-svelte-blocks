# Reset Password Forms

[Demo](https://flowbite-svelte-blocks.vercel.app/marketing/reset-password)

## Example usage

```html
<script lang="ts">
  import { Register } from 'flowbite-svelte-blocks';
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
</script>

<Register href="/">
  <svelte:fragment slot="top">
    <img
      class="w-8 h-8 mr-2"
      src="/images/logo.svg"
      alt="logo"
    />
    Flowbite
  </svelte:fragment>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form class="flex flex-col space-y-6" action="/">
      <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Change Password</h3>
      <label class="space-y-2">
        <span>Your email</span>
        <input type="email" name="email" placeholder="name@company.com" required />
      </label>
      <label class="space-y-2">
        <span>Your password</span>
        <input type="password" name="password" placeholder="•••••" required />
      </label>
      <label class="space-y-2">
        <span>Confirm password</span>
        <input type="password" name="confirm-password" placeholder="•••••" required />
      </label>
      <div class="flex items-start">
        <Checkbox
          >I accept the
          <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">
            Terms and Conditions</a
          ></Checkbox
        >
      </div>
      <button type="submit" class="w-full1">Reset passwod</button>
    </form>
  </div>
</Register>
```
