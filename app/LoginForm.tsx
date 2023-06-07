'use client';
import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

function LoginForm() {
  const [name, setName] = useState<undefined | string>('');
  const [password, setPassword] = useState<undefined | string>('');
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    signIn('credentials', {
      username: name,
      password,
    });
  }
  return (
    <section className="flex min-h-screen items-center justify-center w-full max-w-[400px] mx-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-10"></div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-5 bg-white shadow-lg rounded-lg w-full"
      >
        <div className="head text-center">
          <h3 className="text-2xl font-semibold">Sign In</h3>
        </div>

        <section className="flex flex-col gap-2 mt-6">
          <div className="flex flex-col gap-2 relative group">
            <label
              htmlFor="name"
              className="absolute -top-2 left-3 text-xs text-gray-400 bg-white px-2 group-focus-within:text-gray-900"
            >
              Email or Username
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="p-3 border border-slate-700 rounded-lg"
              id="name"
              placeholder="you@mail.com"
              required
            />
          </div>
          <div className="flex mt-2 flex-col gap-2 relative group">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 text-xs text-gray-400 bg-white px-2 group-focus-within:text-gray-900"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              className="p-3 border border-slate-700 rounded-lg"
              placeholder="Password"
              required
            />
          </div>
        </section>
        <button
          type="submit"
          className="mt-2 mb-4 bg-[#677c97] hover:bg-[#2569c3] text-white p-3 rounded-lg"
        >
          Sign in
        </button>

        <div className="relative my-3">
          <hr />
          <small className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-8 text-center">
            Or
          </small>
        </div>

        <div className="flex gap-3 items-center justify-center">
          <button
            onClick={() => signIn('github')}
            type="button"
            className="flex flex-row items-center justify-center my-2 p-3 rounded-lg border border-stone-200 hover:bg-stone-200"
          >
            <Image
              src="/githubLogo.png"
              width={32}
              height={32}
              alt="Login to Github"
            />
          </button>
          <button
            onClick={() => signIn('google')}
            type="button"
            className="flex flex-row items-center justify-center my-2 p-3 rounded-lg border border-stone-200 hover:bg-blue-200"
          >
            <Image
              src="/googleLogo.png"
              width={32}
              height={32}
              alt="Login to Google"
            />
          </button>
          <button
            onClick={() => signIn('facebook')}
            type="button"
            className="flex flex-row items-center justify-center my-2 p-3 rounded-lg border border-stone-200 hover:bg-stone-200"
          >
            <Image
              src="/facebookLogo.png"
              width={32}
              height={32}
              alt="Login to Facebook"
            />
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
