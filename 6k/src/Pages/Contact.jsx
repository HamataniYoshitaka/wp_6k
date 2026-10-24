import React, { useEffect, useRef, useState } from "react";
import NavFooter from "../Components/NavFooter";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";
import { apiUrl } from "../utils";
import { useReloadFonts } from "../hooks/useReloadFonts";
import { useWindowSize } from "../hooks/useWindowSize";
import { useLocation } from "react-router-dom";

const schema = yup.object().required().shape({
    name: yup.string().required('必須項目です'),
    kana: yup.string().matches(/^[ァ-ヶー　 ]+$/, 'カタカナを入力してください').required('必須項目です'),
    email: yup.string().email('メールアドレスの形式が異なります').required('必須項目です'),
    message: yup.string().required('必須項目です'),
    agreement: yup.bool().oneOf([true], '同意が必要です')
})

export default function Contact(props) {
    const location = useLocation()
    const [windowWidth, windowHeight] = useWindowSize()
    const reloadFonts = useReloadFonts()
    const [isLoaded, setIsLoaded] = useState(false)
    const [titleShowing, setTitleShowing] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            reloadFonts()
        }, 200)
        setTimeout(() => {
            setTitleShowing(true)
        }, 1000)

        // URLにprojectがあれば、その値をFormにセット
        const queryParams = new URLSearchParams(location.search);
        const projectName = queryParams.get('project');
        if (projectName) {
            setProject(projectName)
        }
    }, [])

    // reCAPTCHA のトークン本体を保持し、サーバー側で検証してもらう
    const [recaptcha, setRecapthca] = useState(null)
    const recaptchaRef = useRef(null)
    const onChallenge = (value) => {
        setRecapthca(value)
    }
    const resetRecaptcha = () => {
        setRecapthca(null)
        recaptchaRef.current?.reset()
    }
    const {register, formState: {isValid, errors}, getValues} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            kana: '',
            email: '',
            message: '',
            agreement: false
        }
    })
    // バリデーション不要のForm
    const [company, setCompany] = useState('')
    const [companyKana, setCompanyKana] = useState('')
    const [project, setProject] = useState('')
    const [tel, setTel] = useState('')

    const canSubmit = () => {
        if (isValid && !!recaptcha) return true
        else return false
    }
    const [nowLoading, setNowLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [sendError, setSendError] = useState('')
    const submit = () => {
        const url = apiUrl() + '/wp-json/wp/6k/nonce'
        setNowLoading(true)
        setSendError('')
        axios.post(url, {}).then(res => {
            console.log('success', res)
            const nonce = res.data
            const payload = {
                nonce: nonce,
                recaptcha: recaptcha,
                name: getValues('name'),
                kana: getValues('kana'),
                email: getValues('email'),
                message: getValues('message'),
                work: project,
                company: company,
                company_kana: companyKana,
                tel: tel
    
            }
            const url2 = apiUrl() + '/wp-json/wp/6k/contact'
            axios.post(url2, payload).then(res => {
                console.log('success', res)
                if (res.data && res.data.status === true) {
                    setSent(true)
                } else {
                    setSendError('送信に失敗しました。時間をおいて再度お試しください。')
                    resetRecaptcha()
                }
                setNowLoading(false)
            }).catch(errors => {
                console.log('error', errors)
                const code = errors?.response?.data?.code || ''
                if (code.startsWith('recaptcha')) {
                    setSendError('reCAPTCHA の確認に失敗しました。もう一度チェックを入れて送信してください。')
                } else {
                    setSendError('送信に失敗しました。時間をおいて再度お試しください。')
                }
                resetRecaptcha()
                setNowLoading(false)
            })
        }).catch(errors => {
            console.log('error', errors)
            setSendError('送信に失敗しました。時間をおいて再度お試しください。')
            setNowLoading(false)
        })
    }

    return (
        <div className="bg-[#E8E8E8] pt-32 pb-20 relative">

            <div className={`fixed z-0 top-0 left-0 w-screen overflow-hidden pointer-events-none transition-opacity duration-[2s] ${titleShowing? 'opacity-100': 'opacity-0'}`} style={{height: windowHeight}}>
                <h1 className="absolute top-[calc(50vh-200px)] left-[calc(50vw-760px)] text-transparent text-blur text-[260px] tracking-widest cormorant opacity-40">CONTACT</h1>
            </div>
            <div className=" max-w-lg mx-auto relative px-4 pb-20">
                <div className="">
                    <div className="px-6 overflow-hidden">
                        <div className={`transition-transform duration-1000 delay-100  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                            <h2 className=" text-sm">お問合せ</h2>
                            <hr className="w-4 border-t-1.5 border-black my-3"/>
                        </div>
                    </div>
                    <div className="space-y-4 mt-4">
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-100  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">お名前 ※必須</label>
                                <input type="text" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('name')}/>
                                <p className="text-xs text-red-600 mt-1">{errors.name?.message}</p>
                            </div>
                        </div>
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-200  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">フリガナ ※必須</label>
                                <input type="text" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('kana')}/>
                                <p className="text-xs text-red-600 mt-1">{errors.kana?.message}</p>
                            </div>
                        </div>
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-300  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">御社名</label>
                                <input type="text" value={company} onChange={e=>setCompany(e.target.value)} className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                            </div>
                        </div>
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-[400ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">御社名 フリガナ</label>
                                <input type="text" value={companyKana} onChange={e=>setCompanyKana(e.target.value)} className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                            </div>
                        </div>
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-500  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">電話番号</label>
                                <input type="text" value={tel} onChange={e=>setTel(e.target.value)} className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                            </div>
                        </div>
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-[600ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">メールアドレス ※必須</label>
                                <input type="email" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('email')}/>
                                <p className="text-xs text-red-600 mt-1">{errors.email?.message}</p>
                            </div>
                        </div>
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-[700ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">気になったプロジェクト</label>
                                <input type="text" value={project} onChange={e=>setProject(e.target.value)} className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                            </div>
                        </div>
                        <div className="px-6 overflow-hidden">
                            <div className={`transition-all duration-1000 delay-[800ms]  ${isLoaded? 'scale-100 translate-y-0 opacity-100': 'scale-125 translate-y-20 opacity-0'}`}>
                                <label className="text-xs">お問い合わせの内容 ※必須</label>
                                <textarea rows={5} className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('message')}></textarea>
                                <p className="text-xs text-red-600 mt-1">{errors.message?.message}</p>
                            </div>
                        </div>

                        <div className="px-6 overflow-hidden">
                            <div className={`transition-transform duration-1000 delay-[900ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                <label className="text-xs">
                                    <input type="checkbox" {...register('agreement')} className="mr-1"/>
                                    送信内容確認済み
                                </label>
                                <p className="text-xs mt-2">※上記送信内容を確認後チェックを入れてください。</p>
                            </div>
                        </div>
                        <div className="flex justify-center h-20">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6Lfn1NIZAAAAALJNpsIB0w9hFOSNL30s1Dx6rVmL"
                                onChange={onChallenge}
                                onExpired={() => setRecapthca(null)}
                            />
                        </div>
                        {sendError && (
                            <p className="text-xs text-red-600 text-center px-6">{sendError}</p>
                        )}
                        {nowLoading? (
                            <div className="flex justify-center py-8">
                                <div className="animate-spin h-10 w-10 border-4 border-stone-800 rounded-full border-t-transparent"></div>
                            </div>
                        ): sent? (
                            <div className=" py-8">
                                <p className=" text-center">送信が完了しました。<br />ご利用ありがとうございました。</p>
                            </div>
                        ): (
                            <div className="px-6 overflow-hidden">
                                <div className={`transition-transform duration-1000 delay-[1000ms]  ${isLoaded? 'scale-100 translate-y-0': 'scale-125 translate-y-20'}`}>
                                    <button onClick={()=>submit()} disabled={!canSubmit()} className="block w-full bg-black text-white text-center text-xs py-3 transition-colors hover:bg-gray-800 disabled:bg-gray-400">送信</button>
                                    {/* <button onClick={()=>submit()} className="block w-full bg-black text-white text-center text-xs py-3 transition-colors hover:bg-gray-800 disabled:bg-gray-400">送信</button> */}
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </div>
            <NavFooter />
        </div>

    )
}