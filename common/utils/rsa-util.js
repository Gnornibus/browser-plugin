import JSEncrypt from 'jsencrypt'

/**
 * RSA加密固定值
 * @returns {string}
 */
export function setValRsa(value) {
    // 创建加密对象实例
    const encryptor = new JSEncrypt()
    //设置公钥
    encryptor.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsIXjpr2mvCI/0MF8YwUaJfsm4kALnug15C0gsFrgOLh0/kXFaf3tERjNqRqIroZdtd7rwzVoI7iDHBk/qxXB1cdB9Hq4WswsVUhwN1K1zcZREkydvTxoV19lW7m29T9DDNRsix895vZPxmjL12mJ1mM1kUu9ONlcO/kZTVG3qnwIDAQAB")
    return encryptor.encrypt(value)
}

/**
 * RSA加密对象
 * @returns {Object}
 */
export function setObjRsa(obj) {
    let objVal = JSON.parse(JSON.stringify(obj));
    for (const key in objVal) {
        // 将每个值进行加密处理
        objVal[key] = setValRsa(objVal[key])
    }
    return objVal;
}


