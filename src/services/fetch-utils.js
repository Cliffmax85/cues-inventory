import { client, checkError } from "./client"

export function getUser() {
    return client.auth.session();
}


export async function signUp(email, password) {
    const response = await client.auth.signUp({email, password});

    return response.user;
}

export async function signIn(email, password) {
    const response = await client.auth.signIn({email, password});

    return response.user;
}

export async function logout() {
    await client.auth.signout();
    return window.location.href = '../';
}

export async function createCue(cue){
    const response = await client
      .from('cues')
      .insert([cue]);

    return checkError(response);
}

export async function getCues() {
    const response = await client 
      .from('cues')
      .select();

    return checkError(response);
}

export async function getCueById(id) {
    const response = await client
      .from('cues')
      .select()
      .match({ id })
      .single();

    return checkError(response);
}