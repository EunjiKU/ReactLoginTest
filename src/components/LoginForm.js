import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, formState: {isSubmitting} } = useForm();

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        await new Promise(r => setTimeout(r, 1000));
        alert(JSON.stringify(data))
      })}
    >
      <div className="input-area">
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" placeholder="test@email.com"
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            parttern: {
              value: /\S+@\S+.\S+/,
              message: "이메일 형식에 맞지 않습니다."
            }
          })}
        />
      </div>
      <div className="input-area">
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" placeholder="********"
          {...register("password")}
        />
      </div>
      <button
        className="input-btn" type="submit"
        disabled={isSubmitting}
      >로그인</button>
    </form>
  )
}

export default LoginForm;