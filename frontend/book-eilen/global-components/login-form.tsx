'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function BeLoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (event) => {
        const formData = new FormData(event.target);
        // const data = Object.fromEntries(formData.entries());
        console.log('Form submitted:', event);

        // ! Check if the user exists and password is correct then login the user else put error message
        try {
            await fetch('http://localhost:3040/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form className="be-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <h1 className="h2">Login</h1>

                <div className="row mt-4 g-3">
                    <div className="">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            required
                            id="email"
                            // name="email"
                            type="email"
                            autoComplete="email"
                            className="form-control be-form-input"
                            placeholder="Email Address"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                required
                                id="password"
                                // name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="password"
                                className="form-control be-form-input"
                                placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password is incorrect',
                                    },
                                })}
                            />
                            <button
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {/* Render Eye or EyeOff icon based on showPassword state */}
                                {/* {showPassword ? <EyeOff /> : <Eye />} */}
                                {showPassword ? 'Hide' : 'Show'} {/* Placeholder for icon */}
                            </button>
                        </div>
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-10">
                <button type="submit" className="be-btn be-btn-submit btn">
                    Submit
                </button>
            </div>
        </form>
    );
}
