'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

type userProp = {
  user:
    | {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      }
    | undefined;
};

function UserCard({ user }: userProp) {
  return (
    <div className="container mx-auto">
      <div className="bg-white py-3 px-10">
        <div>
          welcome back {user?.name}, I see we have your email as {user?.email}
        </div>
      </div>
      <div
        onClick={() => signOut()}
        className="bg-blue-100 text-center text-lg w-24 font-bold p-2 rounded-xl mt-10 cursor-pointer"
      >
        Logout
      </div>
    </div>
  );
}

export default UserCard;
