import Image from "next/image";

export default function StrengthTips() {
  return (
    <section className="mt-12 w-full max-w-4xl text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        What makes a password strong?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="text-orange-500 mb-4">
            <Image
              src={
                "https://media.istockphoto.com/id/1363430976/photo/password-online-form-cyber-security-concept-image.jpg?s=1024x1024&w=is&k=20&c=MLgtnyA4UIqyGJTsmjWVxuWddpj0L4PmECLGJdBD-wQ="
              }
              width={300}
              height={300}
              alt="secured-password-generator"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Length Matters</h3>
          <p className="text-sm text-gray-600">
            Longer passwords are harder to crack. Aim for at least 10–12
            characters for better security.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="text-orange-500 mb-4">
            <Image
              src={
                "https://img.freepik.com/free-photo/flat-lay-notebook-with-password-laptop_23-2148578078.jpg?t=st=1744699959~exp=1744703559~hmac=6a5e4aa29fdefd31bfe31221fd7c3ade010a13857c6b160f638a11e7ee09ed29&w=996"
              }
              width={300}
              height={300}
              alt="secured-password-generator"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Mix It Up</h3>
          <p className="text-sm text-gray-600">
            Use a combination of uppercase, lowercase, numbers, and symbols to
            create strong, unpredictable passwords.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="text-orange-500 mb-4">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={300}
              height={300}
              alt="secured-password-generator"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">One Per Account</h3>
          <p className="text-sm text-gray-600">
            Using the same password everywhere is risky—make a different one for
            each account.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="text-orange-500 mb-4">
            <Image
              src={
                "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={300}
              height={300}
              alt="secured-password-generator"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-600">
            Change your passwords regularly, especially after a breach, to keep
            your information safe.
          </p>
        </div>
      </div>
    </section>
  );
}
