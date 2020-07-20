# https://www.youtube.com/watch?v=Et0fYeA2XxY

import PySimpleGUI as sg

class TelaPython:
    def __init__(self):
        #layout
        layout = [
            #estilos:
            [sg.Text('Nome'), sg.Input()],
            [sg.Text('Idade'), sg.Input()],
            [sg.Button('Enviar Dados')]
        ]

        #janela
        janela = sg.Window("Dados do Usuario").layout(layout)
        
        #Extrair dados da tela - rampacking 
        # passando as informaçoes da tela para o VALUES
        self.button, self.values = janela.Read()

    def Iniciar(self):
        print(self.values)

tela = TelaPython()
tela.Iniciar()

