package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

import com.dutchconcepts.capacitor.barcodescanner.BarcodeScanner;

public class MainActivity extends BridgeActivity {}

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>(){{
        add(BarcodeScanner.class);
    }});